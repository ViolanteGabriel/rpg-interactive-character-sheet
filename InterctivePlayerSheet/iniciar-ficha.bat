@echo off
chcp 65001 >nul
where py >nul 2>nul
if %errorlevel% equ 0 (
    py -3 "%~dp0iniciar-ficha.py"
) else (
    python "%~dp0iniciar-ficha.py"
)
if errorlevel 1 pause
