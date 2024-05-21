<!DOCTYPE html>
<html data-theme="mytheme" lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}"> 
    <title>Pook Es</title>
    <link
            rel="icon"
            href=
"https://th.bing.com/th/id/OIP.6mPBDXz_EaFy2iDOyk3XmwHaHM?rs=1&pid=ImgDetMain"
            type="image/x-icon"
        />
</head>
@vite('resources/css/app.css')
<body>
    <div bg-base-100  id="root">

    </div>
    @viteReactRefresh
    @vite('resources/js/app.ts')
</body>

    <script>
        window.env={
            API_BASE_URL:'{{ env ('API_BASE_URL') }}'
        }
    </script>
</html>