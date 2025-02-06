import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import {useEffect} from "react";

// Define the form schema using Zod
const formSchema = z.object({
    projectName: z.string().min(2, {
        message: "Project name must be at least 2 characters.",
    }),
    projectAddress: z.string().min(5, {
        message: "Project address must be at least 5 characters.",
    }),
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }),
});

const QuoteRequest = () => {
    const { toast } = useToast();

    // Initialize the form with react-hook-form and Zod validation
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            projectName: "",
            projectAddress: "",
            description: "",
        },
    });

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => toast(null), 2000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    // Handle form submission
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // Send email using EmailJS
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_IDC,
                {
                    to_email: "imeshnirmal1u@gmail.com",
                    project_name: values.projectName,
                    project_address: values.projectAddress,
                    description: values.description,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            // Show success toast notification
            toast({
                title: "Quote Request Submitted",
                description: "We'll get back to you shortly with a detailed quote.",
            });

            // Reset the form
            form.reset();
        } catch (error) {
            console.error("Error sending email:", error);

            // Show error toast notification
            toast({
                title: "Error",
                description: "Failed to submit your request. Please try again later.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-12 px-4 pt-20">
            <h1 className="text-3xl font-bold mb-8">Request a Quote</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Project Name Field */}
                    <FormField
                        control={form.control}
                        name="projectName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter project name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Project Address Field */}
                    <FormField
                        control={form.control}
                        name="projectAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter project address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Project Description Field */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Describe your project requirements"
                                        className="min-h-[120px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit">Submit Quote Request</Button>
                </form>
            </Form>
        </div>
    );
};

export default QuoteRequest;