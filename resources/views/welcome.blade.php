<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>E-Commerce</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  </head>
  <body>
    <div id="home-page">
      <header>
        <div class="sidebar"></div>
        <div class="line"></div>
      </header>
      <main>
        <div class="product-filter">
          <form class="ordering" method="get">
            <select name="product-cat" class="orderby">
              <option value="default">Default</option>
              <option value="Corona Extra">Corona Extra</option>
              <option value="Corona Light">Corona Light</option>
              <option value="Corona Non-Alcoholic">Corona Non-Alcoholic</option>
              <option value="Corona Familiar">Corona Familiar</option>
            </select>
          </form>
        </div>
        <div class="product-container">
          <div class="product-box"></div>
        </div>
      </main>
    </div>
    <div id="cart-page" style="display: none">
      <header>
        <div class="sidebar"></div>
        <div class="line"></div>
      </header>
      <main>
        <div class="cart-container">
          <div class="cart-box"></div>
        <form class="payment" action="{{route('stripe')}}" method="POST">
            @csrf
            <input type="hidden" name="product_name" value="Corona">
            <input type="hidden" name="quantity" value="1">
            <input type="hidden" name="price" value="10">
            <button class="payment-button" type="submit">Pay</button>
        </form>
        </div>
      </main>
    </div>
    <div id="login-page" style="display: none">
      <header>
        <div class="sidebar"></div>
        <div class="line"></div>
      </header>
      <main>
        <div class="login-container">

                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                    <label class="form-check-label" for="remember">
                                        {{ __('Remember Me') }}
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Login') }}
                                </button>

                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}">
                                        {{ __('Forgot Your Password?') }}
                                    </a>
                                @endif
                            </div>
                        </div>
                        <div class="row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <a href="{{route('auth.google')}}">
                                    <img src="https://logodix.com/logo/1.png" width="100px" style="margin: 30px" alt="google-img">
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

        </div>
      </main>
    </div>
    <script>
        function switchToHomePage() {
            document.getElementById("login-page").style.display = "none";
            document.getElementById("cart-page").style.display = "none";
            document.getElementById("home-page").style.display = "block";
        }
      function switchToCartPage() {
        document.getElementById("login-page").style.display = "none";
        document.getElementById("home-page").style.display = "none";
        document.getElementById("cart-page").style.display = "block";
      }
      function switchToLoginPage() {
        document.getElementById("cart-page").style.display = "none";
        document.getElementById("home-page").style.display = "none";
        document.getElementById("login-page").style.display = "block";
      }
    </script>
    <script src="{{ asset('script/sidebar.js') }}"></script>
    <script src="{{ asset('script/header.js') }}"></script>
    <script src="{{ asset('script/script.js') }}"></script>
    <script src="{{ asset('script/filter.js') }}"></script>
    <script src="{{ asset('script/addcart.js') }}"></script>
  </body>
</html>