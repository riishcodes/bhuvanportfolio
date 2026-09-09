# Copy and organize user assets
Copy-Item "C:\Users\Aastha\.gemini\antigravity-ide\brain\e2f6664a-f55d-403b-b4ae-aaba57f8dbf8\.user_uploaded\media_1788963023689.png" "public\photos\hero-portrait.png" -Force
Copy-Item "C:\Users\Aastha\.gemini\antigravity-ide\brain\e2f6664a-f55d-403b-b4ae-aaba57f8dbf8\.user_uploaded\media_1788963023689.png" "public\photos\bhuvan-physique.png" -Force

Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.50 AM.jpeg" "public\photos\about-portrait.png" -Force
Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.50 AM.jpeg" "public\photos\bhuvan-editorial.jpeg" -Force

Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.47 AM.jpeg" "public\photos\fashion-work.png" -Force
Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.47 AM.jpeg" "public\photos\fashion-creative.jpeg" -Force

Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.51 AM (2).jpeg" "public\photos\fashion-editorial.jpeg" -Force
Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.47 AM (1).jpeg" "public\photos\bhuvan-portrait-studio.jpeg" -Force
Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.49 AM (1).jpeg" "public\photos\theatre-editorial.jpeg" -Force
Copy-Item "public\photos\WhatsApp Image 2026-09-09 at 12.14.48 AM.jpeg" "public\photos\fashion-aladdin.jpeg" -Force

# Standardize videos
Copy-Item "public\videos\WhatsApp Video 2026-09-09 at 12.14.52 AM.mp4" "public\videos\reel-1.mp4" -Force
Copy-Item "public\videos\WhatsApp Video 2026-09-09 at 12.14.53 AM (1).mp4" "public\videos\reel-2.mp4" -Force
Copy-Item "public\videos\WhatsApp Video 2026-09-09 at 12.14.53 AM.mp4" "public\videos\reel-3.mp4" -Force

Write-Output "Assets organized successfully!"
