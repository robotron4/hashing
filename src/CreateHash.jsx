import hash from "hash.js"

export default function CreateHash({text}) {
    const test = hash.sha256().update(text).digest('hex');

    return <p>{test}</p>
}