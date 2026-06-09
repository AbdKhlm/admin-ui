import {} from 'react'
import AuthLayouts  from '../components/Layouts/AuthLayouts'
import FormSignUp   from '../components/Fragments/FormSignUp'


function signUp() {
  return (
    <AuthLayouts>
        <FormSignUp />
    </AuthLayouts>
  );
}

export default signUp;