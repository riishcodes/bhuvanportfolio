Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\Aastha\.gemini\antigravity-ide\brain\e2f6664a-f55d-403b-b4ae-aaba57f8dbf8\.user_uploaded\media_1788961606227.png"
$fullImg = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-Image($x, $y, $w, $h, $outName) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $crop = $fullImg.Clone($rect, $fullImg.PixelFormat)
    $crop.Save("public\photos\$outName", [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    Write-Output "Saved $outName : ${w}x${h} at ($x, $y)"
}

# 1. Hero Portrait:
Crop-Image 140 28 215 152 "hero-portrait.png"

# 2. About Portrait:
Crop-Image 250 182 152 145 "about-portrait.png"

# 3. Work images (clean imagery without text):
Crop-Image 13 410 122 105 "fashion-work.png"
Crop-Image 143 410 122 105 "trading-work.png"
Crop-Image 273 410 122 105 "fitness-work.png"

# 4. Education image:
Crop-Image 18 667 145 77 "education-books.png"

# 5. CTA horizon:
Crop-Image 0 850 409 72 "cta-horizon.png"

# 6. Signature:
Crop-Image 20 279 60 25 "signature.png"

# 7. Script accent:
Crop-Image 320 40 82 65 "same-mindset.png"

$fullImg.Dispose()
