import React from "react";

function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-custom to-white">
      <div className="bg-white w-full max-w-md p-5 rounded-md shadow-lg"> 

        <h2 className="text-2xl font-bold text-gray-700 text-center pt-3 pb-3">Sign In</h2>

        <form className="flex flex-col items-center justify-between gap-5 pb-2">
          <div>
            <input 
              type="email" 
              id="email" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Email" 
              required 
            />
          </div>
          <div>
            <input 
              type="password" 
              id="password" 
              className="border border-gray-400 focus:outline-blue-400 px-3 py-2 rounded-md w-[20em] max-w-full hover:border-gray-700 hover:placeholder:text-gray-700"
              placeholder="Password" 
              required 
            />
          </div>
        </form>

        <a href="#" className="text-blue-600 hover:underline transition duration-500 hover:text-black ml-11 cursor-pointer">
          Forgot Password?
        </a>

        <div className="flex items-center justify-center gap-4 p-3">
          <button className="text-white font-bold bg-blue-400 px-8 py-2 rounded-md cursor-pointer hover:bg-blue-500">Sign In</button>
          <button className="border border-blue-500 text-blue-500 bg-white px-8 py-2 rounded-md hover:bg-blue-50 cursor-pointer">Cancel</button>
        </div>

        <div className="flex ml-11">
          <h2>Not Registered?</h2>
          <span className="text-blue-500 cursor-pointer hover:underline ml-1">SignUp</span>
        </div>

        <div className="flex flex-col items-center justify-between p-3 gap-3">
          <h2 className="font-medium">Or continue with social account</h2>
          <button className="flex items-center justify-between gap-2 border border-blue-500 text-blue-500 bg-white px-8 py-2 rounded-md hover:bg-blue-50 cursor-pointer">
            <img className="w-7" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABSCAYAAADD2VOmAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAACQJJREFUeJztnHlwE1Ucx6EHlwdYTm8RwXFERbOpg0htNjCggJWmIAOK4HigZXRGxxl0kBYoXowKgmXEiyZVBFQUpAVFZwSP4uCBYstwqLTZUopNeiRteuL3l01qW5tmm327byH+Zj7/tfve75P3e+/t22R79OAckmgeJlnNk8GTYB3YBr4Hh4ATnARloAQUgQKwFawGj4Ikp1U4n3ceuoVkFS5F0gvAenAUNIPTKmkEf4INYIZTPMuEIqELkFh6YGS1MBAWDh/4CB9WSrFoiuOdf0QhWYQYJDAQidwDvgI1OojryAmQC2Y5reYE3k4UhZRs6imJwlXo9HPgAKMSVUtDYO6cC5H9eTsKGejgIPAU+EOnUo1EJFXDJKdojuftqzVQqnHUKfAtaDKAqHBUgTXgBt7ueqAkrkRHngeVBhDTHahCaHv0EEZjLz7yRPMIdODIGTLqQkFlnaW7PDQqSPJGl7cARgirnBYhVi95dwIv/6QZI5pz9JBH+7pG7smyx4tbwmSt5c2RjLGvY00t5nNRM3FYaWmbMvUsHXm1yM+qmTwKNLJQOhvnPKu5DvImaC1vtCQfLfFOljV0TLYEaHfYgIvTYcAunRLygEKwG7wBngEPg7kBHgHPSvIx2NfgLynyKYXk2XDPrqE80T/vZUnabpJrJfkmn8SMw15saJnVHBOub05R6IW/HY7/mQbekuSzQKX9LAdpTgXtqBOIuQG4NBJHSdCp8u0Qoep0BKMoBtchmTPBN2FEUrsz0Kbm8hLAHg3E0UHnRnA9kujDvt/C+bj2A4ER2bHtU7JkjeXJHfHPOay3LLR/XFBi1f4YCe3QeWRRm7bpfvcRlL728rAbp+P3fYzlualcNe98m0B7Q8BeUA9WSKJJn/O/stnX3sd49NFqOUqXzncILIR90PatpdZEfY6rvHlxA7w74gtcyy/ylE4ysVh9j+AW6VJdOm+EqM2Pmw8awenq9QO8J1LG+FTI2wmu5J2TbuHNjzsH4k6SvCCezX3rT86/xhOBPNoQX8Y7J10DwtLaygvi/bR3Y/nDo2qkiYLSUxgatdN556N7QNZ7nQn0S9zau9H94lBP6ZSblCwutM/rxzsfXcO7M5bK1x1KYJDqt/vXlc24rq4LeXTEfz3vfHQPzH9TwslrnRe39G0oXzCSjrY6ljQ95VqGVVf7zarRAmJeVSrQX9LbezVXLLnEUzq53VaH9ntX8c6FS0DKge4IDNBStXYgbXXqpQn+0be6ZIIOt0pGi7q82HjIqI1AoJ+q7ARP2azR1RA4jXcuXMKbFzsmUnn/lnT8b5VrEwZp0T9Lpqu/mOlONiKWDHd/Kt971QoE72ohLyDwVnT2tEGxkcBlDATOi1KBT5NAh0p5p0BilArMJoGfqxS4BwyPUoHbSOA+lQK3YCM+JEoFfk0Cf1cpMLs2P/acKBX4Kwk8qlLgSm9evGYnvgYXeIwEHvtfYMSUkMDC/0s4YopJ4A8qBX4YxYvIURL4hUqBe4Fmzz4MLrCQBOaqFBjNG+lvSWCWSoHEvCgV6N9I38dA4IYoFbiOBJrUCvTkxx8o/uxcTX7MZ3CBi3rU5Mf0ggRfpPL2bx986v4PkksFR+okLQSKma7B6OhsDXiDgUD58S1EHIxAXkvBtiGulPcnVyU6UpsFh22lyWHrqYVELQLJL1Mv0HWj/2KQ8Vp35FXnxzc6Ph5ZkZSb4oO40wGOCXbbFXy1KAtLhrs3BHypUmCdZam7r/+CtXlx05TKK8vr51u8ObECo66pjTyiBSw25Rh/FCL560C5SoH7Wi+IW7FzIacqnLyD2xNqZm+0VncQ15bj4BqObhQFkl/MYP5b2e6iEPRBKHF/5/Vp+OyTyysnvDe1vgt5QXJAX05uwoYl030xki9UKxDXab9oQtTMzuS583o3oGRdYx3TO5ZsKGrBFE5+wgaSTwfNKgXWW5a62h+gYB6k78eUt5VXuqOf7/FN47oq2VAcABdxchQyRHn0FTEo392dNgBp94MmkvfT9kEebFHqIpAX5FOsyob5dqqYWUkr7wYG8ogHO22EvuKLu4qCTVtHVI/PTWlUIS9IIRims6v/hDXDHYOknwZNDORVYhsU+sU+uKuYiy0KC3lBDmODfYV+utqHuNQdh6QfBz4G8pqxeKR32SDKbgCSLmAokCjHrV6STs5aA8kOQNL5oIFR6f4GBodtGAnPBSxHIdGAD2cORqMu7yUYtzrnMiT7IyNxQRYrahyjJQEJ72EskPCCt8BIkz1Nkx++mOyp5+H688w59x4e//IOr5hZoXbLEuQ4uFpxR9AJK3BpIJEoAQ4wHiNS9fep8YHHmBypg3G9u8He1uqx3918y9psb/KKIrUlTB/Cs2KGS/n3H812Wxw6kQWUbqAjoQrsBulgDGQqfm0dRlo/TAmj8H9pwA4Ohupr4jvp9Ukv7cEiUtESocD94MLuf7J2G5XyTg0FtoVG+36wGawAD4FUcDuYBmaCBSAD5AryQicp/YDNOfc0jVu1sc6ytKy7JV0D7uy2vFaJDttocEgnidpin9kydt1LvuSsY0r3gyT7FaDuiwNofCHwcBfAhpax2S/6LMucSkbiX0D9DyUxQdN8OFVgv7XhRuLbjzWMX/lVfRfyqgDbQxE0PFvQdlHRfTTesmZ9Z4sLzXsLb8twsz8cRqNzzqaRSNz85qJ6y/LjwZKmW76J1sxK7Tb8grwqenknzhLzhvlNSS/so5Gnzy/rsXkV0HAx78QZ4sQ+VN83Wgr21BFo+LBw5s+LxVgold+mMZXosA0Hz4FKA4joLvQk8UtwLRd5rRLl275J4LszZDSSuCKwBFVknNcio0N0Q/+UQA/Z5U7yFtUZf4NVwJjvcxAc03tiMqa5ke5nfwHNBpBGVAjyCdDNJlQMb09hw2xPI5EDBXnfSPNMJE/31NIAfgargQBxxnn5dncC88wFSOBR8I2OpX0ULAcjzLl36fN2Xj0CC84lgnwstR4cYVTi9KHQ2eIusAhtjOadp26BMh+G0qIV/AmwTqDnyfJqTkdoTnASnBDk793QY9LvA3/zeuB/7sD/X2zKmcHl1/L/ANiE1ix27HDzAAAAAElFTkSuQmCC" alt="google" />
            <h2 className="text-xl">Sign In With Google</h2>
          </button>
        </div>

      </div>
    </div>
  );
}

export default SignupPage;
