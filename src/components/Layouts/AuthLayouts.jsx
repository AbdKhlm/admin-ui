import {} from 'react'
import Logo from '../Elements/Logo'

function AuthLayouts(props) {
    const { children } = props;  // Destructuring assignment

  return (
    <>
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm">
        <Logo />
        {children}
      </div>
      {/* container end */}
    </main>
    </>
  );
}

export default AuthLayouts;