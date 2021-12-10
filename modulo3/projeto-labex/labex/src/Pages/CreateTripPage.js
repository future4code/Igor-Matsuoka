import {React, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Form } from "antd";
import { Input } from "antd";
import styled from 'styled-components';
import axios from 'axios';

const InputConteiner = styled(Input)`
    width: 40%;
    height: 30px;
    border-radius: 4px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

const ConteinerForm = styled.div`
    margin-top: 2rem;
    margin: 5px;
    h1 {
    color: black;
    }
`;

const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (token === null) {
          console.log("Não está logado!!!");
          navigate("/login");
        }
    }, []);
}

function CreateTrip(){
    useProtectedPage()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const token = localStorage.getItem('token')
    /* const navigate = useNavigate() */

    const onChangeTitle = (ev) => {
        setTitle(ev.target.value);
      };
      const onChangePlanet = (ev) => {
        setPlanet(ev.target.value);
      };
      const onChangeDate = (ev) => {
        setDate(ev.target.value);
      };
      const onChangeDescription = (ev) => {
        setDescription(ev.target.value);
      };
      const onChangeDuration = (ev) => {
        setDuration(ev.target.value);
    };

    const createTrip = () =>{
        const body = {
            name: title,
            planet: planet,
            date: date,
            description: description,
            durationInDays: duration
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-matsuoka-carver/trips", body,
            {
                headers: { 
                    auth: token
                }
            }   
        )
        .then((res) => {
            console.log("certo ", res.data)
            alert("Viagem criada!")
        })
        .catch((er) => {
            console.log("erro: ", er.response)
        })
    }

    return <div>
        <ConteinerForm>

        <h1>Crie uma viagem</h1>
        <Form
            layout="vertical"
            name="complex-form"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 40 }}
          >
            <Form.Item
              name="title"
              rules={[{ required: true, message: "Título é obrigatório" }]}
            >
              <InputConteiner
                placeholder={"Título da sua viagem"}
                value={title}
                onChange={onChangeTitle}
              />
            </Form.Item>
            <Form.Item
              name="descricao"
              rules={[{ required: true, message: "Descrição é obrigatória" }]}
            >
              <InputConteiner
                placeholder={"Descrição da viagem"}
                value={description}
                onChange={onChangeDescription}
              />
            </Form.Item>
            <Form.Item
              name="duracao"
              rules={[{ required: true, message: "Preço é obrigatório" }]}
            >
              <InputConteiner
                type="number"
                placeholder={"Duração em dias"}
                value={duration}
                onChange={onChangeDuration}
              />
            </Form.Item>
            <div>
                <select name="planeta" onChange={onChangePlanet} >
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Terra">Terra</option>
                <option value="Marte">Marte</option>
                <option value="Júpiter">Júpiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
                <option value="Plutão(planeta anão)">Plutão(planeta anão)</option>
                </select>
            </div>
            <Form.Item
              name="data"
              rules={[{ required: true, message: "Informe a data" }]}
            >
            <InputConteiner
                type="date"
                placeholder={"Informe a data"}
                value={date}
                onChange={onChangeDate}
            />
            </Form.Item>
            <Form.Item>
              <button onClick={createTrip}>Criar</button>
            </Form.Item>
            </Form>

          </ConteinerForm>
        <Link to="/admin/trips/list">Voltar</Link>
    </div>

}

export default CreateTrip;