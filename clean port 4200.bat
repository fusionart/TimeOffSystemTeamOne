for /f "tokens=5" %a in ('netstat -ano ^| find "4200" ^| find "LISTENING"') do taskkill /f /pid %a