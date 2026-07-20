"use client";

import React, { useState } from "react";
import { Card, TextField, Label, InputGroup, Button, Link } from "@heroui/react";
// Gravity UI Icons
import { At, ShieldKeyhole, Eye, EyeClosed } from "@gravity-ui/icons";
import { signIn } from "@/lib/auth-client";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSignIn = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            const { data, error } = await signIn.email({
                email,
                password,
                callbackURL: "/",
            });

            if (error) {
                setErrorMessage(error.message || "Invalid email or password.");
            } else {
                setSuccessMessage("Signed in successfully! Redirecting...");
                setEmail("");
                setPassword("");
            }
        } catch (err) {
            setErrorMessage("An unexpected network error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#121212] px-4 dark text-white">
            <Card className="w-full max-w-110 border-none bg-[#09090B] p-6 shadow-2xl rounded-2xl flex flex-col gap-6">

                {/* Header */}
                <div className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-semibold tracking-wide text-slate-100">
                        Welcome back
                    </h1>
                    <p className="text-sm text-slate-400">
                        Fill in your details to access your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSignIn} className="flex flex-col gap-5">

                    {/* Email Input */}
                    <TextField name="email" fullWidth>
                        <Label className="text-sm font-medium text-slate-300 mb-1.5 block">Email Address*</Label>
                        <InputGroup className="border border-slate-700 bg-[#1b2a41] rounded-xl h-12 px-3 flex items-center gap-2 focus-within:border-blue-500 transition-colors">
                            <InputGroup.Prefix>
                                <At className="text-slate-400 text-lg shrink-0" />
                            </InputGroup.Prefix>
                            <InputGroup.Input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 focus:outline-none h-full pl-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </InputGroup>
                    </TextField>

                    {/* Password Input */}
                    <TextField name="password" fullWidth>
                        <Label className="text-sm font-medium text-slate-300 mb-1.5 block">Password*</Label>
                        <InputGroup className="border border-slate-700 bg-[#1b2a41] rounded-xl h-12 px-3 flex items-center gap-2 focus-within:border-blue-500 transition-colors">
                            <InputGroup.Prefix>
                                <ShieldKeyhole className="text-slate-400 text-lg shrink-0" />
                            </InputGroup.Prefix>
                            <InputGroup.Input
                                type={isVisible ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 focus:outline-none h-full pl-1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <InputGroup.Suffix>
                                <button
                                    className="focus:outline-none text-slate-400 hover:text-slate-200 flex items-center justify-center cursor-pointer"
                                    type="button"
                                    onClick={toggleVisibility}
                                >
                                    {isVisible ? <EyeClosed className="text-lg" /> : <Eye className="text-lg" />}
                                </button>
                            </InputGroup.Suffix>
                        </InputGroup>
                    </TextField>

                    {/* Error Message */}
                    {errorMessage && (
                        <div className="rounded-xl bg-danger-950/40 p-3.5 text-sm text-danger-400 border border-danger-900/50">
                            <span className="font-semibold">Error:</span> {errorMessage}
                        </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <div className="rounded-xl bg-success-950/40 p-3.5 text-sm text-success-400 border border-success-900/50">
                            <span className="font-semibold">Success:</span> {successMessage}
                        </div>
                    )}

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-[#1b86f6] hover:bg-blue-600 text-white font-medium h-12 rounded-xl text-md shadow-md shadow-blue-500/10 mt-2"
                        isLoading={isLoading}
                    >
                        Sign In
                    </Button>
                </form>

                {/* Bottom Redirect Link */}
                <div className="mt-4 text-center text-sm text-slate-400">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/signup" className="font-medium text-[#2d93ff] hover:underline underline-offset-4">
                        Sign up instead
                    </Link>
                </div>

            </Card>
        </div>
    );
}