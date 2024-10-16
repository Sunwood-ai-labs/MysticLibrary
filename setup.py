from setuptools import setup, find_packages

setup(
    name="MysticLibrary",
    version="0.3.0",
    packages=find_packages(),
    install_requires=[
        "requests",
        "loguru",
    ],
    author="Your Name",
    author_email="your.email@example.com",
    description="A class-based package to fetch and optionally save text content from URLs",
    long_description=open("README.md", encoding="utf8").read(),
    long_description_content_type="text/markdown",
    url="https://github.com/yourusername/MysticLibrary",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
