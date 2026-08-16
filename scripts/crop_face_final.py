"""Crop hero portrait: full face, modest headroom, fills the frame (no letterbox pad)."""
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

# Modest real headroom from the photo (~8%) — not a fake padded box
below = fh - hair
headroom = max(16, int(0.08 * (below + 40)))
top = max(0, hair - headroom)
crop = face.crop((0, top, fw, fh))

tw, th = crop.size
ratio = 3 / 4
if tw / th > ratio:
    nw = int(th * ratio)
    x0 = max(0, int((tw - nw) * 0.38))
    crop = crop.crop((x0, 0, x0 + nw, th))
else:
    nh = int(tw / ratio)
    crop = crop.crop((0, 0, tw, min(th, nh)))

out = crop.resize((1200, 1600), Image.Resampling.LANCZOS)
out = ImageEnhance.Sharpness(out).enhance(1.3)
out = ImageEnhance.Contrast(out).enhance(1.05)
out = out.filter(ImageFilter.UnsharpMask(radius=1.0, percent=80, threshold=2))
out.save(base / "face-portrait.png", optimize=True, quality=95)
print(f"saved face-portrait.png hair={hair} headroom={headroom}px (~8%, full photo fill)")
