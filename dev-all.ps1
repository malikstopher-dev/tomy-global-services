$root = "C:\A WEBSITE\TOMY\TOMY_GLOBAL_SERVICES"
$sites = @(
  @{ dir = $root; port = 3005; name = "Main Site" }
  @{ dir = "$root\tomy-tech"; port = 3000; name = "TOMY Tech" }
  @{ dir = "$root\tomy-barber"; port = 3001; name = "TOMY Barber" }
  @{ dir = "$root\tomy-interior"; port = 3002; name = "TOMY Interior" }
  @{ dir = "$root\tomy-elect"; port = 3003; name = "TOMY Elect" }
)

foreach ($site in $sites) {
  Start-Process -FilePath "cmd.exe" -ArgumentList "/c cd /d `"$($site.dir)`" && npx next dev --port $($site.port) && pause" -WindowStyle Normal
  Write-Output "Starting $($site.name) on port $($site.port)..."
}

Write-Output "`nAll servers starting. Open each in your browser:"
foreach ($site in $sites) {
  Write-Output "  http://localhost:$($site.port)  -- $($site.name)"
}
