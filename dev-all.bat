@echo off
start "Main Site" cmd /c "cd /d C:\A WEBSITE\TOMY\TOMY_GLOBAL_SERVICES && npx next dev --port 3005"
start "TOMY Tech" cmd /c "cd /d C:\A WEBSITE\TOMY\TOMY_GLOBAL_SERVICES\tomy-tech && npx next dev --port 3000"
start "TOMY Barber" cmd /c "cd /d C:\A WEBSITE\TOMY\TOMY_GLOBAL_SERVICES\tomy-barber && npx next dev --port 3001"
start "TOMY Interior" cmd /c "cd /d C:\A WEBSITE\TOMY\TOMY_GLOBAL_SERVICES\tomy-interior && npx next dev --port 3002"
start "TOMY Elect" cmd /c "cd /d C:\A WEBSITE\TOMY\TOMY_GLOBAL_SERVICES\tomy-elect && npx next dev --port 3003"
echo.
echo All servers launching...
echo.
echo http://localhost:3005  -- Main Site
echo http://localhost:3000  -- TOMY Tech
echo http://localhost:3001  -- TOMY Barber
echo http://localhost:3002  -- TOMY Interior
echo http://localhost:3003  -- TOMY Elect
echo.
pause
