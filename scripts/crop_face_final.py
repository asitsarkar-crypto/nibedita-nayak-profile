from PIL import Image
from pathlib import Path

base = Path(r"C:\Users\asits\Projects\nibedita-nayak-profile\public\images")
im = Image.open(base / "hero-portrait.png").convert("RGB")
w, h = im.size

# Tighter face crop — exclude colleague on right, focus face + shoulders
box = (int(w * 0.0), int(h * 0.04), int(w * 0.52), int(h * 0.42))
crop = im.crop(box)

# Force 3:4 centered on face (bias upward)
tw, th = crop.size
target_ratio = 3 / 4
cur = tw / th
if cur > target_ratio:
    nw = int(th * target_ratio)
    left = max(0, (tw - nw) // 3)  # keep left (her face)
    crop = crop.crop((left, 0, left + nw, th))
else:
    nh = int(tw / target_ratio)
    top = max(0, int((th - nh) * 0.15))
    crop = crop.crop((0, top, tw, top + nh))

out = crop.resize((960, 1280), Image.Resampling.LANCZOS)
out.save(base / "face-portrait.png", optimize=True)
print("saved face-portrait.png", out.size)
