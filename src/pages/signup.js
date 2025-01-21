import React, { useEffect } from 'react'
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../Firebase/firebase.config'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleRedirectResult = async () => {
      console.log('Checking redirect result...')

      try {
        // Ensure Firebase Auth is fully initialized before proceeding
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            console.log('User already signed in:', user)
            unsubscribe()
            return
          }

          const result = await getRedirectResult(auth)
          console.log('Raw redirect result:', result)

          if (result) {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            console.log('Redirect sign-in successful:', {
              user: result.user,
              token,
            })
            navigate('/')
          } else {
            console.log('No redirect result found.')
          }
          unsubscribe()
        })
      } catch (error) {
        console.error('Error handling redirect result:', error.message)
      }
    }

    handleRedirectResult()
  }, [navigate])

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    console.log('Device type:', isMobile ? 'Mobile' : 'Desktop')

    try {
      if (isMobile) {
        console.log('Initiating redirect sign-in for mobile...')
        await signInWithRedirect(auth, provider)
      } else {
        console.log('Initiating popup sign-in for desktop...')
        const result = await signInWithPopup(auth, provider)
        console.log('Popup sign-in successful:', result.user)
        navigate('/')
      }
    } catch (error) {
      console.error('Sign-in error:', error.message)
    }
  }

  return (
    <div>
      <main>
        <div className='flex h-screen overflow-hidden'>
          <section className='overflow-hidden md:flex hidden bg-[rgb(25,25,25)] flex-grow flex-shrink flex-basis relative flex-col min-h-[90vh] w-full p-0'>
            <div className='flex flex-col items-center h-full w-full justify-center'>
              <h1 className='text-[rgb(255,255,255)] text-4xl w-[366px] text-center font-normal leading-[44px] mx-0 mt-0 mb-9'>
                Sign up <br />
                and come on in
              </h1>
            </div>
          </section>
          <section className='lg:-ml-4 p-0 flex-grow flex-shrink grid overflow-auto h-full rounded-r-none rounded-l-2xl relative flex-col min-h-[90vh] w-full bg-transparent'>
            <div className='bg-[rgb(255,255,255)] grid relative w-full custom-grid custom-grid-1 items-center'>
              <div className='md:max-w-[542px] flex-col max-w-64 justify-self-center flex justify-center row-start-[second] col-start-[second] row-end-[second] col-end-[second] items-center'>
                <div className='border-[rgb(194,194,193)] bg-google-button bg-no-repeat bg-custom-pos text-[rgb(94,94,94)] mb-[15px]'>
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
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
