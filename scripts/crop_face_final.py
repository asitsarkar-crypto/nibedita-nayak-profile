"""Crop hero portrait: full crown visible with ~3 inch (30%) headroom."""
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter

base = Path(__file__).resolve().parents[1] / "public" / "images"
src = Image.open(base / "culture-books.png").convert("RGB")
w, h = src.size

left, right = int(w * 0.64), int(w * 0.995)
face = src.crop((left, 0, right, int(h * 0.58)))
fw, fh = face.size
arr = face.load()


def row_min(y: int) -> float:
    return min(sum(arr[x, y]) / 3 for x in range(int(fw * 0.2), int(fw * 0.85), 2))


hair = next(
    y
    for y in range(5, fh - 10)
    if row_min(y) < 135 and row_min(min(fh - 1, y + 5)) < 125
)

OUT_W, OUT_H = 1200, 1600
CROWN_Y = int(0.30 * OUT_H)  # ~3 inch gap on hero — never clip hair

body = face.crop((0, hair, fw, fh))
bw, bh = body.size
body_h = OUT_H - CROWN_Y
scale = body_h / bh
body_w = int(bw * scale)
body_r = body.resize((body_w, body_h), Image.Resampling.LANCZOS)

wall = face.getpixel((fw // 2, max(0, hair // 2)))
canvas = Image.new("RGB", (OUT_W, OUT_H), wall)
x0 = max(0, (OUT_W - body_w) // 2 - int(OUT_W * 0.02))
if body_w > OUT_W:
    cx = int((body_w - OUT_W) * 0.38)
    body_r = body_r.crop((cx, 0, cx + OUT_W, body_h))
    x0 = 0
canvas.paste(body_r, (x0, CROWN_Y))

out = ImageEnhance.Sharpness(canvas).enhance(1.25)
out = ImageEnhance.Contrast(out).enhance(1.04)
out = out.filter(ImageFilter.UnsharpMask(radius=1.0, percent=70, threshold=2))
out.save(base / "face-portrait.png", optimize=True, quality=95)
print(f"saved face-portrait.png crown_locked_at={CROWN_Y}px (30% / ~3in headroom)")
