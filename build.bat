call npm cache clean --force
rd /S /Q .\.next\cache
rd /S /Q .\out
call npm run build