
import logo from '../Images/Logo.png'


const Footer = () => {
  return (
<footer className='bg-primary-100 py-16'>
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
<img src={logo} alt="logo" />
<p className='my-5'>
Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body
 Shapes That you Dream of... Get Your Dream Body Now
</p>
<p> &copy; Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
<h4 className='font-bold'>  Links</h4>
<p className="my-5">World Class Training.</p>
<p className='my-5'>Join Our Classes.</p>
<p>EVOGYM</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className='font-bold'>Contact Us</h4>
<p className="my-5">(+234)-909-0215-759</p>
<p className='my-5'>Evogym@gmail.com</p>
        </div>
    </div>
</footer>
  )
}

export default Footer