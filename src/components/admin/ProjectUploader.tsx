"use client";

import { draftToMarkdown } from "markdown-draft-js";
import { useForm } from "react-hook-form";
import ReactPlayer from "react-player";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  CreateProjectSchemaTypes,
  createProjectSchema,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingButton from "./LoadingButton";
import RichTextEditor from "./RichTextEditor";
import { createProject } from "@/lib/actions/admin.action";
import { UploadButton } from "@/lib/uploadthing";
import FileUpload from "../MediaUploader";
import { toast } from "sonner";
import FormFieldComp from "../FormFieldComp";
import { cn, formComponent } from "@/lib/utils";

export default function ProjectUploader() {
  const form = useForm<CreateProjectSchemaTypes>({
    resolver: zodResolver(createProjectSchema),
  });

  const {
    handleSubmit,
    watch,
    trigger,
    control,
    setValue,
    setFocus,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(values: CreateProjectSchemaTypes) {
    try {
      await createProject(values);
      toast("Project Created", {
        description: "succefully create the project",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    } catch (error) {
      console.log(error);

      toast("Project Not Created", {
        description: "Error occur while trying to create the project",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  }

  return (
    <main className="flex w-full flex-col my-10 space-y-10">
      <div className="space-y-5 text-center">
        <h1 className="text-amber-50">Upload Project Details.</h1>
      </div>
      <div className="space-y-6 rounded-lg bg-black w-full border p-4">
        <Form {...form}>
          <form
            className="space-y-4 text-white"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            {formComponent.map(
              ({ endpoint, type, name, label, placeholder }) => (
                  <FormFieldComp
                    type={type}
                    control={control}
                    endpoint={endpoint}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    key={name}
                  />
              )
            )}

            <LoadingButton type="submit" loading={isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
}
