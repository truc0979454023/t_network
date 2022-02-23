import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Loading from './Loading'
import Toast from './Toast'

const Alert = () => {
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div>
            {alert.loading && <Loading />}

            {
                alert.error &&
                <Toast msg={{ body: alert.error, title: 'Error' }}
                    // Khi xét payload :{} thì payload sẽ là undefined tức là alert cũng là undefined nên sẽ close toast
                    handleShow={() => dispatch({ type: 'ALERT', payload: {} })} bgColor="bg-danger" />
            }

            {
                alert.success &&
                <Toast msg={{ title: "Success", body: alert.success }}
                    handleShow={() => dispatch({ type: 'ALERT', payload: {} })} bgColor="bg-success" />
            }
        </div>
    )
}

export default Alert
