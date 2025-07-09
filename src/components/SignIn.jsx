import style from "../styles/SignIn.module.scss"

export default function SignIn() {
   return <section className={style.signin}>
      <section className={style.signin_align}>
         <section className={style.signin_form}>
            <section>
               <h2>
                  Welcome to Vuexy! 👋
               </h2>
               <p>
                  Please sign-in to your account and start the adventure
               </p>
            </section>
            <div>
               <form action="">
                  <section className={style.signin_item}>
                     <label htmlFor="username">Username</label>
                     <input type="text" name="username" id="username" placeholder='Enter your username...' />
                  </section>
                  <section className={style.signin_item}>
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" id="password" placeholder='Enter your password...' />
                  </section>
                  <section>
                     <button>Sign in</button>
                  </section>
               </form>
            </div>
         </section>
      </section>
   </section>
}