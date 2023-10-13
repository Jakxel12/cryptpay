import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className="z-10 max-w-4xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-2 lg:dark:bg-zinc-800/30">
          <ul className="menu menu-horizontal bg-base-150">
          <li><a href="/"><div>Home</div></a></li>
  <li><a href="/news"><div >News</div></a> </li>
  <li><a href="/courrency"><div>Currency Change</div></a></li>
  <li><a href="/profile">Profile</a></li>
  <li><a href="/about_us">About us</a></li>
</ul>
          <div class="form-control">
  <div class="input-group">
    <input type="text" placeholder="Search…" class="input input-bordered px-2" />
    <button class="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
        </div>
  
        <div className="relative flex place-items-center before:absolute before:h-[480px] before:w-[800px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[240px] after:w-[320px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[600px]">
</div>
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
      <header>
      <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <h1 className="text-6xl font-semibold">Welcome to CryptPay</h1>
        <div className="text-gray-600 text-center">Your cryptocurrency management solution</div>
      </header>
      <section>
        <div>  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>

        <div className="mockup-phone" style={{ marginBottom:"20px !important" }}>
      <div className="camera"></div> 
          <div className="display">
           <div className="artboard artboard-demo phone-1">
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
  <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>

        <img
  src="https://www.pngitem.com/pimgs/m/11-116468_247-icon-digital-wallet-icon-png-transparent-png.png"
  alt="Shoes"
  className="rounded-xl"
  style={{ display: "block", margin: "0 auto" }}
/>

  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Wallet!</h2>
    <p>Your cryptocurrency management solution</p>
    <div className="card-actions">
      <button className="btn btn-primary">Pay Now</button>
    </div>
  </div>
</div>
<div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>

           <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
        
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      Inbox
      <span className="badge badge-sm">99+</span>
    </a>
  </li>
  <li>
    <a>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      Updates
      <span className="badge badge-sm badge-warning">NEW</span>
    </a>
  </li>
  <li>
    <a>
      Stats
      <span className="badge badge-xs badge-info"></span>
    </a>
  </li>
</ul>
            </div>
        </div>
      </div>    
      </section>
      </div>

      <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
        <div style={{ paddingTop:"20px !important", color:"white"}} > .  </div>
     <div>
      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center">About CryptPay</h2>
        <div className="text-gray-700 text-center">
        CryptPay is a cryptocurrency management platform that allows you to make transactions, manage your cryptocurrency portfolio, and get up-to-date information on the cryptocurrency market.
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center">Main features</h2>
        <ul className="list-disc list-inside text-gray-700 text-center">
          <li>Buy and sell cryptocurrency whith ease.</li>
          <li>Track your cryptocurrency portfolio</li>
          <li>Receive price notifications in real time.</li>
          <li>Access market information and analysis</li>
        </ul>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center">Join us</h2>
        <div className="text-gray-700 text-center">
          ¡Join the CryptPay community and start making the most of your cryptocurrency investmentss!
        </div>
        <div className="text-center"> {/* Aquí aplicamos el estilo text-center para centrar horizontalmente */}
         <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
         <a href="/login">Sing Up</a>
        </button>
        </div>

      </section>
    </div>
    <footer class="footer p-10 bg-base-300 text-base-content">
  <nav>
    <header class="footer-title">Services</header> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header class="footer-title">Company</header> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header class="footer-title">Social</header> 
    <div class="grid grid-flow-col gap-4">
      <a href='https://twitter.com/CryptP57423' target="_blank"><svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
      </div>
  </nav>
</footer>
    </main>
  )
}
