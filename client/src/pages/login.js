import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../redux/actions/authAction'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        if (auth.token) navigate('/')
    }, [auth.token, navigate])

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSumit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className='auth_page'>
            <form onSubmit={handleSumit}>
                <h3 className='text-uppercase text-center mb-4'>T-Demo</h3>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='email' value={email} onChange={handleChangeInput} />
                    <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <div className="pass">
                        <input type={typePass ? 'text' : 'password'} className="form-control" id="exampleInputPassword1"
                            name='password' value={password} onChange={handleChangeInput} />
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark w-100"
                    disabled={email && password ? false : true}>Login</button>

                <p className="my-2">
                    You don't have an account?
                    <Link to="/register" style={{ color: "crimson" }}>Register now!</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
