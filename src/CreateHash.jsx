import { SHA256 } from "crypto-js"

export default function CreateHash({text}) {

    return <p>{SHA256(text)}</p>
}