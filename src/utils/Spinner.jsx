import { ClipLoader } from "react-spinners";

export default function Spinner() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
        }}>
            <ClipLoader
                color="#007bff"
                loading={true}
                size={50}
            />
        </div>
    )
}