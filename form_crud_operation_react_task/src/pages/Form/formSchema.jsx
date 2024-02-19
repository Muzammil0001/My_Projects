import * as Yup from "yup"

const formSchema = Yup.object({
    name: Yup.string().min(3).max(25).required("Please fill this field"),
    email:Yup.string().email().required("Please fill this field")
})
export default formSchema;