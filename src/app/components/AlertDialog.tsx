import { CircleAlert } from "lucide-react"
import { DeleteButton, DeleteButtonUser } from "./button"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/AlertDialog"
import { Button } from "./ui/button"


export function HandleDeleteProduct ({id}:{id:string}) {
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button className="bg-red-600 hover:bg-red-500 hover:text-white" variant="outline">Delete</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah Anda Yakin?</AlertDialogTitle>
        <AlertDialogDescription className="text-red-500">
          Product yang sudah di hapus, tidak dapat di pulihkan kembali!
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="text-white">
        <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
        <DeleteButton  id={id} />
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export function HandleDeleteUser ({id}:{id:string}) {
  return (
    <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button className="bg-red-600 hover:bg-red-500 hover:text-white" variant="outline">Delete</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Apakah Anda Yakin?</AlertDialogTitle>
        <AlertDialogDescription className="text-red-500 flex gap-2">
          <CircleAlert />Data akun yang sudah di hapus tidak bisa di kembalikan
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="text-white">
        <AlertDialogCancel className="text-black">Cancel</AlertDialogCancel>
        <DeleteButtonUser  id={id} />
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}