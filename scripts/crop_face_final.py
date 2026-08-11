from PIL import Image, ImageFilter, ImageEnhance, ImageOps
from pathlib import Path

base = Path(r"C:\Users\asits\Projects\nibedita-nayak-profile\public\images")
books = Image.open(base / "culture-books.png").convert("RGB")
w, h = books.size

# Wider vertical window so hair crown has breathing room
left = int(w * 0.60)
top = 0
right = int(w * 0.995)
bottom = int(h * 0.55)
crop = books.crop((left, top, right, bottom))

# Build 3:4 canvas — place subject with headroom (pad top if needed)
cw, ch = crop.size
target_w, target_h = 1200, 1600
# Scale so width fills, then pad top/bottom as needed
scale = target_w / cw
resized = crop.resize((target_w, max(1, int(ch * scale))), Image.Resampling.LANCZOS)
rw, rh = resized.size

canvas = Image.new("RGB", (target_w, target_h), (236, 232, 226))
# Prefer aligning so top of source stays near top, with small pad
pad_top = max(24, (target_h - rh) // 5) if rh < target_h else 0
if rh > target_h:
    # Too tall: keep top (hair), trim bottom only
    resized = resized.crop((0, 0, rw, target_h))
    canvas.paste(resized, (0, 0))
else:
    canvas.paste(resized, (0, pad_top))
    # Soft fill remaining bottom with edge color
    if pad_top + rh < target_h:
        edge = resized.crop((0, rh - 1, rw, rh)).resize((target_w, target_h - pad_top - rh))
        canvas.paste(edge, (0, pad_top + rh))

out = ImageEnhance.Sharpness(canvas).enhance(1.4)
out = ImageEnhance.Contrast(out).enhance(1.06)
out = ImageEnhance.Color(out).enhance(1.03)
out = out.filter(ImageFilter.UnsharpMask(radius=1.1, percent=90, threshold=2))
out.save(base / "face-portrait.png", optimize=True, quality=95)
print("saved with headroom", out.size)
