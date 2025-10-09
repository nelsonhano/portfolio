import { Control, FieldValues, Path } from "react-hook-form";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import RichTextEditor from "./admin/RichTextEditor";
import { draftToMarkdown } from "markdown-draft-js";
import ColourfulText from "./ui/colourful-text";
import MediaUploader from "./MediaUploader";
import { Input } from './input';

export default function FormFieldComp<T extends FieldValues>({
    control,
    endpoint,
    type,
    name,
    label,
    placeholder,
}: {
    control: Control<T>;
    type: "text" | "img" | "video" | "url" | "description";
    name: Path<T>;
    label: string;
    endpoint?: "projectImgUploader" | "projectVideoUploader" | "projectFeaturedUploader";
    placeholder?: string;
}) {
    return (
        <>
            {(type === "text" || type === "url") && (
                <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <ColourfulText text={label} />
                            </FormLabel>
                            <FormControl>
                                <Input placeholder={placeholder} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            )}

            {(type === "video" || type === "img") && (
                <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <ColourfulText text={label} />
                            </FormLabel>
                            <FormControl>
                                <MediaUploader
                                    endpoint={endpoint ?? "projectImgUploader"}
                                    onChange={field.onChange}
                                    value={field.value}
                                    maxFiles={type === "img" ? 5 : 1}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            )}

            {type === "description" && (
                <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                <ColourfulText text={label} />
                            </FormLabel>
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
            )}
        </>
    );
}



