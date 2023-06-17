import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import API from "../../../api"
import SelectField from "../../common/form/selectField"
import TextField from "../../common/form/textField"
import { validator } from "../../../utils/validator"

const CommentCreateForm = ({ user, id, handleAdd }) => {
    const [users, setUsers] = useState({})
    const [data, setData] = useState({ userId: user._id, content: "" })
    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setData((prev) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    useEffect(() => {
        API.users.fetchAll().then((data) => {
            const newData = data.map((user) => ({
                label: user.name,
                value: user._id
            }))
            setUsers(newData)
        })
    }, [])

    const validatorConfig = {
        content: {
            isRequired: {
                message: "Обязательно должен быть написан текст в комментарии"
            }
        }
    }
    useEffect(() => {
        validate()
    }, [data])
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const addComment = () => {
        if (isValid) {
            const commentData = {
                ...data,
                pageId: id
            }
            handleAdd(commentData)
        }
    }

    return (
        <div className="card mb-2">
            <div className="card-body">
                <div>
                    <h2>New comment</h2>
                    <div className="mb-4">
                        <SelectField
                            value={data.userId}
                            onChange={handleChange}
                            defaultOption={"Выберите пользователя"}
                            options={users}
                            name={"userId"}
                        />
                    </div>
                    <div className="mb-4">
                        <TextField
                            label={"Сообщение"}
                            name={"content"}
                            type={"textarea"}
                            value={data.content}
                            onChange={handleChange}
                            error={errors.content}
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            disabled={!isValid}
                            onClick={() => addComment()}
                            className="btn btn-primary"
                        >
                            Опубликовать
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
CommentCreateForm.propTypes = {
    user: PropTypes.object,
    id: PropTypes.string,
    handleAdd: PropTypes.func
}

export default CommentCreateForm
