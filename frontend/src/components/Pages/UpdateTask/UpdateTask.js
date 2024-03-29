import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../../../asyncActions/getTodos";
import {refreshTask} from "../../../asyncActions/refreshTask";
import "./UpdateTask.css"

const UpdateTask = () => {
    fetchTodos()
    const { id } = useParams();
    let todos = useSelector(store => store.todos)
    todos = todos.filter(x => x.id === id);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch, id])

    let [name, setName] = useState();
    let [description, setDescription] = useState();
    let [status, setStatus] = useState();
    let [date, setDate] = useState();

    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        // eslint-disable-next-line array-callback-return
        todos.map(elem => {
            if (typeof name === "undefined") {name = elem.name}
            if (typeof description === "undefined") {description = elem.description}
            if (typeof status === "undefined") {status = elem.status}
            if (typeof date === "undefined") {date = elem.date}
        })
        await refreshTask({
            id,
            name,
            description,
            status,
            date,
        }, id);
        navigate(`/todos/${id}`);
    }

    return (
        <div className="update_task_wrapper">
            {todos.map(elem=>
            <form className={"form_wrapper"} onSubmit={handleSubmit}>
                <label>
                    <p>Name:</p>
                    <input type="name" onChange={e => setName(e.target.value)} defaultValue={`${elem.name}`}/>
                </label>
                <label>
                    <p>Description:</p>
                    <input type="description" onChange={e => setDescription(e.target.value)} defaultValue={`${elem.description}`}/>
                </label>
                <label>
                    <p>Status:</p>
                    <input type="status" onChange={e => setStatus(e.target.value)} defaultValue={`${elem.status}`}/>
                </label>
                <label>
                    <p>Date:</p>
                    <input type="date" onChange={e => setDate(e.target.value)} defaultValue={`${elem.date}`}/>
                </label>
                <div>
                    <button id={"sub_button"} type="submit">Save changes</button>
                </div>
            </form>
            )}
        </div>
    );
};

export default UpdateTask;