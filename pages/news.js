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
  <li><a href="/currency"><div>Currency Change</div></a></li>
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
      <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="https://media.istockphoto.com/id/1248674191/es/foto/gráfico-de-comercio-criptomoneda-de-oro-bitcoin.jpg?s=612x612&w=0&k=20&c=d9M9PsGvHKU9hazr6K4h2e29VIP1amT34Z_lbzgCfhc=" alt="bitcoin" width = "500" height= "300"/>
  </div> 
  <div className="carousel-item">
    <img src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2021/05/Solana-SOL-marca-un-nuevo-maximo-historico-mientras-el-mercado-retrocede.jpg?fit=1200%2C800&ssl=1" alt="Solana" width = "500" height= "300"/>
  </div> 
  <div className="carousel-item">
    <img src="https://www.esic.edu/sites/default/files/rethink/544d3ca8-moneda-ethereum.jpg" alt="ethereum" width = "500" height= "300"/>
  </div> 
</div>
<div>
      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center">What it happens now?</h2>
        <div className="text-gray-700 text-center">
        CryptPay is a cryptocurrency management platform that allows you to make transactions, manage your cryptocurrency portfolio, and get up-to-date information on the cryptocurrency market.
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold text-center">Bitcoin Hovers Above $27.4K; XRP Notches Win, Solana Token Slides</h2>
        <ul className="list-disc list-inside text-gray-700 text-center">
        Bitcoin (BTC) lost 0.7% while crypto majors showed mixed movements as low volatility seemed to return to the crypto markets, days after ETF optimism pushed prices higher.
        <p>The largest cryptocurrency by market value traded at $27,400 on Wednesday, seemingly stabilizing around that level after losing support at $28,000 earlier this week. Ether (ETH) lost 1.3%, Solana’s SOL</p>
        <p>fell 3.5% to lead majors losses, while Cardano’s ADA and BNB Chain’s BNB slipped 2% each in the past 24 hours.</p>
        </ul>
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
