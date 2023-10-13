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

<img src="https://s2.coinmarketcap.com/static/img/coins/200x200/5426.png" alt="solana$" width = "50" height= "50"/>
<img src="https://wp-api.zipmex.com/wp-content/uploads/2022/03/SOL-price-chart-2020-1024x506.png" alt="solana$" width = "500" height= "300"/>

<div className="form-control">
  <label className="label">
    <span className="label-text">Enter amount</span>
  </label>
  <label className="input-group">
    <input type="text" className="input input-bordered" />
    <span>SOL</span>
  </label>
</div>

    </main>
  )
}