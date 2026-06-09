import {} from 'react'
import AuthLayouts  from '../components/Layouts/AuthLayouts'
import FormSignIn   from '../components/Fragments/FormSignIn'


function signIn() {
  return (
    <AuthLayouts>
        <FormSignIn />
    </AuthLayouts>
  );
}

export default signIn;