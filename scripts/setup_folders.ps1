Add-Type -AssemblyName System.Drawing

$src = "C:\Users\Aastha\.gemini\antigravity-ide\brain\e2f6664a-f55d-403b-b4ae-aaba57f8dbf8\.user_uploaded\media_1788961606227.png"
$img = [System.Drawing.Bitmap]::FromFile($src)
Write-Output "Reference Image Dimensions: $($img.Width) x $($img.Height)"

# Create directories
New-Item -ItemType Directory -Force -Path "public\resume"
New-Item -ItemType Directory -Force -Path "public\photos"
New-Item -ItemType Directory -Force -Path "public\videos"
New-Item -ItemType Directory -Force -Path "public\assets"

$img.Dispose()
