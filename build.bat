copy src\Stashy.*.* docs\public\App\stashy  /Y
copy css\Stashy.*.* docs\public\Content  /Y

node build.js

cd docs/public/App/durandal/amd

optimizer.exe

pause

