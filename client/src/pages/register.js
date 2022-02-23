import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { register } from '../redux/actions/authAction'

function Register() {
    const initialState = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        cf_password: '',
        gender: 'male'
    }
    const [userData, setUserData] = useState(initialState)
    const { fullname, username, email, password, cf_password } = userData

    const { auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [typePass, setTypePass] = useState(false)
    const [typeCf_Pass, setTypeCf_Pass] = useState(false)

    useEffect(() => {
        if (auth.token) {
            navigate('/')
        }
    }, [auth.token, navigate])



    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSumit = e => {
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <div className='auth_page'>
            <form onSubmit={handleSumit}>
                <h3 className='text-uppercase text-center mb-4'>T-Demo</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputFullname1">Full name</label>
                    <input type="text" className="form-control" id="exampleInputFullname1" aria-describedby="emailHelp"
                        name='fullname' value={fullname} onChange={handleChangeInput} />
                    <small id="emailHelp" className="form-text text-danger">
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputUsername1">User name</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp"
                        name='username' value={username.toLowerCase().replace(/ /g, '')} onChange={handleChangeInput} />
                    <small id="emailHelp" className="form-text text-danger">
                        {alert.username ? alert.username : ''}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='email' value={email} onChange={handleChangeInput} />
                    <small id="emailHelp" className={`form-text ${alert.email ? " text-danger" : 'text-muted'}`}>
                        {alert.email ? alert.email : "We'll never share your email with anyone else."}
                    </small>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <div className="pass">
                        <input type={typePass ? 'text' : 'password'} className="form-control" id="exampleInputPassword1"
                            name='password' value={password} onChange={handleChangeInput} />
                        <small onClick={() => setTypePass(!typePass)} >
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                    <small id="emailHelp" className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confrim Password</label>
                    <div className="pass">
                        <input type={typeCf_Pass ? 'text' : 'password'} className="form-control" id="exampleInputPassword2"
                            name='cf_password' value={cf_password} onChange={handleChangeInput} />
                        <small onClick={() => setTypeCf_Pass(!typeCf_Pass)} >
                            {typeCf_Pass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                    <small id="emailHelp" className="form-text text-danger">
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputGender">Gender</label>
                    <div className='row justify-content-around' >
                        <div >
                            <input type="radio" className="form-control" id="exampleInputGender1" aria-describedby="emailHelp"
                                name='gender' value='male' onChange={handleChangeInput} defaultChecked />
                            <label htmlFor="exampleInputGender1" >Male</label>
                        </div>
                        <div>
                            <input type="radio" className="form-control" id="exampleInputGender2" aria-describedby="emailHelp"
                                name='gender' value='female' onChange={handleChangeInput} />
                            <label htmlFor="exampleInputGender2">Female</label>
                        </div>

                        <div>
                            <input type="radio" className="form-control" id="exampleInputGender3" aria-describedby="emailHelp"
                                name='gender' value='other' onChange={handleChangeInput} />
                            <label htmlFor="exampleInputGender3">Other</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark w-100">Register</button>

                <p className="my-2">
                    You already have an account?
                    <Link to="/" style={{ color: "crimson" }}>Login now!</Link>
                </p>
            </form>
        </div>
    )
}

export default Register
