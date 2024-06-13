import { TextField } from "@mui/material"
import { TextareaAutosize } from "@mui/material"
import mailIcon from "/mail.png"
import styles from './Contact.module.css'
import { Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useState } from "react";




export const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const submit = (e) => {
        e.preventDefault();
        fetch("https://formcarry.com/s/7Rml_QIeDPg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/jsonname"
            },
            body: JSON.stringify({ name:name, email: email, message: message })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(res.message);
                }
            })
            .catch((error) => setError(error));


        if (error) {
            return <p>{error}</p>;
        }

      

    }




    return <>
        {submitted && <p>email sent successfully</p>}
        <div className={styles.con}>
            <div className={styles.leftCon}>
                <img src={mailIcon} alt="" />
            </div>
            <div className={styles.rightCon}>
                <form onSubmit={submit}>
                    <Input type="name" label="Name" id="email"  value={name}
                        onChange={(e) => setName(e.target.value)}
                        required

                    />
                    <Input type="email" label="Email" id="name" value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />

                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        className="max-w-xs message"
                        size="lg"
                        variant="faded"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}



                    />
                    <Button endContent={<IoSend />} type="submit">
                        Send
                    </Button>


                </form>
            </div>
        </div>
    </>
}