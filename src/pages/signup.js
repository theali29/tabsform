import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import logo from '../expand.png'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../Firebase/firebase.config'

export default function SignUp() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const checkRedirect = async () => {
      console.log('Checking redirect result...')

      try {
        const result = await getRedirectResult(auth)

        if (result) {
          // User signed in successfully with redirect
          const user = result.user
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken

          console.log('Redirect sign-in successful:', { user, token })
          navigate('/') // Navigate after successful sign-in
        } else {
          console.log('No redirect result found.')
        }
      } catch (error) {
        console.error('Error handling redirect result:', error.message)
      }
    }

    checkRedirect()
  }, [navigate])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()

    provider.setCustomParameters({
      prompt: 'select_account',
    })

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    console.log('Device type:', isMobile ? 'Mobile' : 'Desktop')

    try {
      if (isMobile) {
        console.log('Using redirect for mobile...')
        await signInWithRedirect(auth, provider)
      } else {
        console.log('Using popup for desktop...')
        const result = await signInWithPopup(auth, provider)
        const user = result.user
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken

        console.log('Popup sign-in successful:', { user, token })
        navigate('/') // Navigate after successful login
      }
    } catch (error) {
      console.error('Sign-in error:', error.message)
    }
  }

  const signUpWithEmail = async (e) => {
    e.preventDefault()
    setError(null)
    setMessage(null)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      console.log('User created:', user)
      setMessage(
        'Account created successfully, Please check your email for verification'
      )
    } catch (error) {
      setError('Error signing up:', error.message)
    }
  }

  return (
    <div>
      <main>
        <div className='flex h-screen overflow-hidden'>
          <section className='overflow-hidden md:flex hidden bg-[rgb(25,25,25)] flex-grow flex-shrink flex-basis relative flex-col min-h-[90vh] w-full p-0'>
            <div className='flex flex-col items-center h-full w-full justify-center '>
              <h1 className='text-[rgb(255,255,255)] text-4xl w-[366px] text-center font-normal leading-[44px] mx-0 mt-0 mb-9'>
                Sign up <br />
                and come on in
              </h1>
              <div>
                <picture>
                  <img
                    src='https://www.typeform.com/static/images/signup-page/product-sample@1x.webp'
                    alt='Tabsform sample'
                    loading='lazy'
                    decoding='async'
                    fetchPriority='low'
                    role='presentation'
                  />
                </picture>
              </div>
              <p className='text-[rgb(255,255,255)] text-[14px] leading-5 absolute bottom-6'>
                © Tabsform
              </p>
            </div>
          </section>
          <section className='lg:-ml-4 p-0 flex-grow flex-shrink grid overflow-auto h-full rounded-r-none rounded-l-2xl relative flex-col min-h-[90vh] w-full bg-transparent '>
            <div className='bg-[rgb(255,255,255)] grid relative w-full custom-grid custom-grid-1 items-center '>
              <div className='relative py-2 px-6 text-[rgb(61,61,60)]'>
                <button className='bg-none  flex border-none p-0 text-inherit items-center'>
                  <div className='mr-2'>
                    <svg
                      height='17'
                      viewBox='0 0 20 20'
                      width='17'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z'
                        fill='currentColor'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <span className='g:text-sm text-xs leading-[1.5] font-normal'>
                    English
                  </span>
                  <div className='ml-2'>
                    <svg
                      fill='none'
                      height='5'
                      viewBox='0 0 9 5'
                      width='9'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        clip-rule='evenodd'
                        d='M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z'
                        fill='currentColor'
                        fill-rule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
              <div className='items-center col-start-[second] text-[rgb(61,61,60)] col-end-[second] flex justify-end py-2 px-6  '>
                <p className='lg:text-sm text-xs  my-0 ml-0 mr-2 '>
                  Already have an account?
                </p>
                <div className='xxs:w-auto md:gap-8 inline-flex flex-col items-stretch gap-4 bg-transparent min-w-16 max-w-full'>
                  <a
                    href='/login'
                    className='m-0 text-xs inline-block cursor-pointer justify-center text-center  font-medium w-full leading-[1.5] px-[10px] py-[3px] transition text-[rgb(25,25,25)] rounded-md bg-transparent  border border-solid border-[rgb(25,25,25)] '
                  >
                    Log in
                  </a>
                </div>
              </div>
              <div className='md:max-w-[542px] flex-col max-w-64 justify-self-center flex justify-center row-start-[second] col-start-[second] row-end-[second] col-end-[second] items-center'>
                {/* <div className='flex items-center justify-center h-20 md:max-w-60'>
                  <a
                    aria-label='Tabsform'
                    href='/'
                    title='Tabsform'
                    target='_top'
                    className='leading-[0] text-none m-0 p-0 text-[100%]'
                  >
                    <div className=' leading-[0]'>
                      <img
                        src={logo}
                        alt='Brand Logo'
                        width={25}
                        height={18}
                        style={{ height: '28px' }}
                      />
                      <span className=''>Tabsform</span>
                    </div>
                  </a>
                </div> */}
                <div className='flex items-center z-[60] h-20 relative lg:flex-1'>
                  <Link
                    to='/'
                    className='flex leading-[0] text-none m-0 p-0 text-[100%]'
                  >
                    <img
                      src={logo}
                      alt='Brand Logo'
                      width={30}
                      height={20}
                      style={{ height: '30px' }}
                    />

                    <span className='font-normal ml-2 text-3xl font-pacifico'>
                      Tabsform
                    </span>
                  </Link>
                </div>
                <h2 className='font-light text-2xl leading-9 text-[rgb(94,94,94)] mb-6 text-center max-w-full md:max-w-64'>
                  Get better data with conversational forms, surveys, quizzes
                  &amp; more.
                </h2>
                <div className='flex flex-col w-full'>
                  <div className='border-[rgb(194,194,193)] bg-google-button  bg-no-repeat bg-custom-pos  text-[rgb(94,94,94)] mb-[15px]'>
                    {/* <Link
                      target='_self'
                      data-qa='google-signin-btn'
                      data-se='social-auth-google-button'
                      to={signInWithGoogle()}
                      className='m-0 text-base  inline-block cursor-pointer justify-center text-center  font-medium w-full leading-[1.5] px-4 py-2 transition text-[rgb(25,25,25)] rounded-[10px] bg-transparent  border border-solid border-[rgb(25,25,25)]'
                    >
                      Sign up with google
                    </Link> */}
                    <button
                      target='_self'
                      data-qa='google-signin-btn'
                      data-se='social-auth-google-button'
                      onClick={signInWithGoogle}
                      className='m-0 text-base inline-block cursor-pointer justify-center text-center font-medium w-full leading-[1.5] px-4 py-2 transition text-[rgb(25,25,25)] rounded-[10px] bg-transparent border border-solid border-[rgb(25,25,25)]'
                    >
                      Sign up with Google
                    </button>
                  </div>
                  <div className='border-[rgb(194,194,193)] bg-microsoft-button  bg-no-repeat bg-custom-pos text-[rgb(94,94,94)] mb-[15px]'>
                    <a
                      target='_self'
                      data-qa='microsoft-signin-btn'
                      data-se='social-auth-microsoft-button'
                      href='/auth.com'
                      className='m-0 text-base  inline-block cursor-pointer justify-center text-center  font-medium w-full leading-[1.5] px-4 py-2 transition text-[rgb(25,25,25)] rounded-[10px] bg-transparent  border border-solid border-[rgb(25,25,25)]'
                    >
                      Sign up with Microsoft
                    </a>
                  </div>
                </div>
                <div className='relative h-1 my-[25px] mx-0 text-center'>
                  <span className='bg-[rgb(255,255,255)] text-[rgb(94,94,94)] text-sm py-0 px-[15px]'>
                    OR
                  </span>
                </div>
                <div className='flex flex-col w-full'>
                  <div className='xxs:w-auto inline-flex flex-col items-stretch gap-4 bg-transparent min-w-[140px] max-w-full'>
                    <button className='m-0 text-base inline-block cursor-pointer justify-center text-center  font-medium w-full leading-[1.5] px-4 py-2 transition text-[rgb(255,255,255)] rounded-[10px] bg-[rgb(25,25,25)]  border border-solid border-[rgb(25,25,25)]'>
                      Sign up with email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
