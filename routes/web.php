<?php

use Illuminate\Support\Facades\Route;

// Single-page Vue app: every public URL is served by the same shell and
// resolved client-side by vue-router (/, /privacy/ios, /privacy/playstore).
Route::view('/{any?}', 'app')->where('any', '^(?!api|up).*$');
