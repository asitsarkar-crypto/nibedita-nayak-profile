from PIL import Image, ImageFilter, ImageEnhance
from pathlib import Path

base = Path(r"C:\Users\asits\Projects\nibedita-nayak-profile\public\images")
im = Image.open(base / "culture-books.png").convert("RGB")
w, h = im.size

left, top, right, bottom = int(w * 0.645), int(h * 0.175), int(w * 0.995), int(h * 0.535)
crop = im.crop((left, top, right, bottom))
tw, th = crop.size
ratio = 3 / 4
if tw / th > ratio:
    nw = int(th * ratio)
    x0 = max(0, tw - nw)
    crop = crop.crop((x0, 0, x0 + nw, th))
else:
    nh = int(tw / ratio)
    crop = crop.crop((0, 0, tw, min(th, nh)))

out = crop.resize((1200, 1600), Image.Resampling.LANCZOS)
y0 = int(1600 * 0.04)
box = out.crop((0, y0, 1200, 1600))
bw, bh = box.size
nw = int(bh * 3 / 4)
x0 = (bw - nw) // 2
final = box.crop((x0, 0, x0 + nw, bh)).resize((1200, 1600), Image.Resampling.LANCZOS)
final = ImageEnhance.Sharpness(final).enhance(1.3)
final = ImageEnhance.Contrast(final).enhance(1.05)
final = final.filter(ImageFilter.UnsharpMask(radius=1.0, percent=80, threshold=2))
final.save(base / "face-portrait.png", optimize=True, quality=95)
print("saved balanced portrait", final.size)
