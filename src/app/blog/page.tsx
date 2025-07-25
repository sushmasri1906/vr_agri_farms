import React from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "../data/BlogPosts";

export default function Page() {
	return (
		<main className="px-4 md:px-8 lg:px-12 py-16 mt-10 max-w-7xl mx-auto min-h-screen">
			{/* Page Header */}
			<header className="text-center mb-20">
				<h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 mt-12">
					Agri Insights & Resources
				</h1>
				<p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
					Dive into articles on natural farming, sustainable practices, and land
					investment strategies - curated to help you grow smarter.
				</p>
				<div className="mt-2 h-1 w-24 bg-orange-500 rounded mx-auto" />
			</header>

			{/* Blog Cards Grid */}
			<section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				{blogPosts.map((post, idx) => (
					<BlogCard key={idx} post={post} />
				))}
			</section>
		</main>
	);
}
