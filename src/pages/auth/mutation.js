export const mutation = async () => {
    try {
        const res = await fetch("https://api.themoviedb.org/3/authentication/guest_session/new", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTZlYTQ2OWYyMzUxYzY5YmNhODFhOWY0MWQ1NGQ1NyIsInN1YiI6IjY2NTFiMzI1YjgwNDUzYjlhOGEyNzMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dkKHHjo28o-Hs-juwZcPEf7QFq9K3zkaQ_PSxpz3dkY"
            },
        });
        
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.status_message || 'Error fetching data');
        }

        return await res.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}