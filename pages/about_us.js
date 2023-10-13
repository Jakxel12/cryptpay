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
        </div>
        <div className="carousel-item">
    <img src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2021/05/Solana-SOL-marca-un-nuevo-maximo-historico-mientras-el-mercado-retrocede.jpg?fit=1200%2C800&ssl=1" alt="Solana" width = "500" height= "300"/>
        </div> 
        <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    -Introduction:
  </div>
  <div className="collapse-content"> 
    <p>We are a CryptoWallet that is in charge of informing, showing your Crypto in national currency wherever you are, and above all we keep you safe and updated.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Mission
  </div>
  <div className="collapse-content"> 
    <p>Facilitate access, education and adoption of cryptocurrencies, including Solana, while providing our users with simple and secure tools to convert their digital assets into national currency. Our mission is to empower people by providing them with the information and tools necessary to manage their assets effectively in the world of cryptocurrencies, thereby promoting financial inclusion and understanding of this disruptive technology.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Vission
  </div>
  <div className="collapse-content"> 
    <p>To be leaders in the crypto wallet industry by offering a comprehensive and friendly platform for users of all ages and experience levels. Our vision is to build an ecosystem where cryptocurrencies are accessible to everyone and used safely and effectively in everyday life. We want to be recognized for our excellence in education, security and ease of use, and be a catalyst in the mass adoption of cryptocurrencies, thus contributing to a more inclusive and decentralized financial system.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Corporate culture
  </div>
  <div className="collapse-content"> 
    <p>-Innovation: In the cryptocurrency industry, innovation is key. The company should foster an environment in which creativity and the constant search for new solutions are at the center of the culture.</p>
    
    <p>-Education: Since the company focuses on educating users about cryptocurrencies, the culture should promote continuous training and the generation of high-quality educational content.</p>
    
    <p>-Transparency: Cryptocurrencies are often associated with transparency and immutability of transactions. The company must reflect these principles in its culture, promoting transparency in its operations and communications.</p>
    
    <p>-Security: Security is fundamental in the world of cryptocurrencies. The culture should prioritize the security of user funds and data, and encourage best practices in this regard.</p>
    
    <p>-Liability: Since the company helps users convert cryptocurrencies into national currency, it must encourage strict compliance practices and policies to ensure that it complies with regulations and protects its users from possible risks.
    </p>
  </div>
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