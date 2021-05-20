<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>

    <div id="app">

        <nav-component></nav-component>

        <view-component></view-component>

    </div>
    

    <script src="{{ mix('js/app.js') }}"></script>

</body>
</html>