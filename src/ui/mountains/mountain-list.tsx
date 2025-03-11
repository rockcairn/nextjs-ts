export default function MountainList () {
    type Mountain = {
      id: number;
      name: string;
      height: string;
    }
  
    const mountains: Mountain[] = [{id: 1, name: 'Elbert', height: '14,419'}, {id: 54, name: 'La Plata', height: '14,013'}];
    return (
    <ol>
      {mountains.map((mountain) => (
            <li key={mountain.id}>{mountain.id}. {mountain.name} ({mountain.height}ft.)</li>
          ))} 
    </ol>
    );
  }