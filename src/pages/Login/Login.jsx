import React from 'react'

export const Login = () => {
  return (
    <section class="">
    <div class="pt-20">
      <h2 class="text-3xl font-semibold text-center">Account</h2>
      <div class="container">
        <div class="max-w-xl mx-auto">
          <h2 class="font-semibold text-2xl">Sign in</h2>

          <form action="" class="mt-5">
            <div>
              <input id="email" type="email" class="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]" placeholder="Email*" />
              <span class="mt-2 inline-block text-xs text-red-600">Email or password invalid</span>
            </div>

            <div class="mt-3">
              <input
                id="password"
                type="password"
                class="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                placeholder="Password*"
              />
            </div>

            <a href="#none" class="text-xs mt-5 mb-5 block hover:underline">Forgot password ?</a>
            <button
              type="submit"
              class="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}
