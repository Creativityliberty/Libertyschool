<?php

use App\Http\Controllers\Public\BecomeTrainer\CheckoutController;
use App\Http\Controllers\Public\BecomeTrainer\PaymentController;
use App\Http\Controllers\Public\BecomeTrainer\TrainerPlanController;
use App\Http\Controllers\Public\Courses\CheckoutController as CourseCheckoutController;
use App\Http\Controllers\Public\Courses\CourseController;
use App\Http\Controllers\Public\Home\HomeController;
use App\Http\Controllers\Public\WebhookController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::inertia('about', 'home/about')->name('about');
Route::inertia('blog', 'home/blog/index')->name('blog');
Route::inertia('contact', 'home/contact')->name('contact');
Route::inertia('realisations', 'home/realisations/index')->name('realisations');

// Plateforme & Communauté
Route::inertia('comment-ca-marche', 'home/how-it-works')->name('how-it-works');
Route::inertia('tarifs', 'home/pricing')->name('pricing');
Route::inertia('communaute/forum', 'home/community/forum')->name('community.forum');
Route::inertia('communaute/evenements', 'home/community/events')->name('community.events');

// Légal
Route::inertia('legal/confidentialite', 'home/legal/privacy')->name('legal.privacy');
Route::inertia('legal/cgu', 'home/legal/cgu')->name('legal.cgu');
Route::inertia('legal/cookies', 'home/legal/cookies')->name('legal.cookies');
Route::inertia('legal/mentions-legales', 'home/legal/terms')->name('legal.terms');

// Courses
Route::get('courses', [CourseController::class, 'index'])->name('courses.index');
Route::get('courses/{id}', [CourseController::class, 'show'])->name('courses.show');
Route::get('courses/{id}/checkout', [CourseCheckoutController::class, 'show'])->middleware(['auth', 'verified'])->name('courses.checkout.show');
Route::post('courses/checkout', [CourseCheckoutController::class, 'store'])->middleware(['auth', 'verified'])->name('courses.checkout');
Route::inertia('courses/purchase/success', 'home/courses/success')->middleware(['auth', 'verified'])->name('courses.purchase.success');

// Become trainer
Route::get('become-trainer', [TrainerPlanController::class, 'index'])->name('become-trainer.index');
Route::get('become-trainer/checkout/{plan}', [CheckoutController::class, 'show'])->middleware(['auth', 'verified'])->name('become-trainer.checkout.show');
Route::post('become-trainer/checkout', [CheckoutController::class, 'store'])->middleware(['auth', 'verified'])->name('become-trainer.checkout');
Route::inertia('become-trainer/success', 'home/become-trainer/success')->name('become-trainer.success');

// Stripe / Cashier
Route::post('stripe/webhook', [WebhookController::class, 'handleWebhook'])->name('cashier.webhook');
Route::get('stripe/payment/{payment}', [PaymentController::class, 'show'])->name('cashier.payment');
