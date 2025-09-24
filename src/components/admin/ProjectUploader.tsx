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
import { CreateProjectSchemaTypes, createProjectSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingButton from "./LoadingButton";
import RichTextEditor from "./RichTextEditor";
import { createProject } from "@/lib/actions/admin.action";
import { UploadButton } from "@/lib/uploadthing";

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
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  }

  return (
    <main className="flex flex-col my-10 space-y-10">
      <div className="space-y-5 text-center">
        <h1 className="text-amber-50">Upload Project Details.</h1>
      </div>
      <div className="space-y-6 rounded-lg border p-4">
        <div>
          <h2 className="font-semibold">Job details</h2>
          <p className="text-muted-foreground">
            Provide a job description and details
          </p>
        </div>
        <Form {...form}>
          <form
            className="space-y-4 text-white"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. facebook" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="shortDesc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="a scallable ai powered software"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="longDesc"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Long Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="technologies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="videoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Video</FormLabel>
                  <FormControl>
                    <UploadButton
                      endpoint="projectVideoUploader"
                      onClientUploadComplete={(res) => {
                        const videoUrl = res?.[0].ufsUrl;
                        if (!videoUrl) return;

                        field.onChange(videoUrl);

                        console.log("Files: ", res);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  {field.value && (
                    <ReactPlayer
                      playing={true}
                      loop={false}
                      url={field.value || ""}
                    />
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="featuredImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Featured Image</FormLabel>
                  <FormControl>
                    <UploadButton
                      endpoint="projectFeaturedUploader"
                      onClientUploadComplete={(res) => {
                        const featuredImageUrl = res?.[0].ufsUrl;
                        if (!featuredImageUrl) return;

                        field.onChange(featuredImageUrl);

                        console.log("Files: ", res);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="images"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Images</FormLabel>
                  <FormControl>
                    <UploadButton
                      endpoint="projectImgUploader"
                      onClientUploadComplete={(res) => {
                        const imgUrl = res?.[0].ufsUrl;
                        if (!imgUrl) return;
                        field.onChange(imgUrl);
                        console.log("Files: ", res);
                        alert("Upload Completed");
                      }}
                      onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="version"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Version</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="urlLive"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Live Url</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="repoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project GitHub Url</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="longDesc"
              render={({ field }) => (
                <FormItem>
                  <Label onClick={() => setFocus("longDesc")}>
                    Description
                  </Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton type="submit" loading={isSubmitting}>
              Submit
            </LoadingButton>
          </form>
        </Form>
      </div>
    </main>
  );
}
