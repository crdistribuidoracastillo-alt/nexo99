
"use client";

import { useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState("Inicio");

  const sections = [
    "Inicio",
    "Sorteos",
    "Resultados",
    "Análisis estadístico",
    "Publicaciones",
    "Miembros",
    "Banca Pura Vida",
    "Operadores",
    "Configuración"
  ];

  return (
    <main className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">99</div>
          <div>
            <h2>NEXO 99</h2>
            <small>ANÁLISIS · COMUNIDAD · CONEXIÓN</small>
          </div>
        </div>

        <nav>
          {sections.map((item) => (
            <button
              key={item}
              className={menu === item ? "active" : ""}
              onClick={() => setMenu(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="operator">
          <small>OPERADOR PRINCIPAL</small>
          <strong>BANCA PURA VIDA</strong>
        </div>
      </aside>

      <section className="content">
        <header>
          <div>
            <small>PLATAFORMA ADMINISTRATIVA</small>
            <h1>{menu}</h1>
            <p>Bienvenido al sistema NEXO 99.</p>
          </div>
          <span className="status">Versión inicial</span>
        </header>

        {menu === "Inicio" ? (
          <>
            <div className="cards">
              <article>
                <small>SORTEOS CONFIGURADOS</small>
                <h2>0</h2>
                <p>Pendiente de configuración</p>
              </article>
              <article>
                <small>ÚLTIMO RESULTADO</small>
                <h2>--</h2>
                <p>Sin datos oficiales</p>
              </article>
              <article>
                <small>PUBLICACIONES</small>
                <h2>0</h2>
                <p>Pendientes de configuración</p>
              </article>
              <article>
                <small>OPERADOR PRINCIPAL</small>
                <h2 className="operator-name">Pura Vida</h2>
                <p>Perfil empresarial</p>
              </article>
            </div>

            <div className="panel">
              <small>BIENVENIDO A NEXO 99</small>
              <h2>Tu centro de administración</h2>
              <p>
                Desde aquí podrás gestionar los sorteos,
                resultados, análisis estadísticos,
                publicaciones y operadores.
              </p>
              <div className="notice">
                Esta es la primera versión visual.
                Las conexiones y automatizaciones
                se implementarán en las próximas fases.
              </div>
            </div>
          </>
        ) : (
          <div className="panel">
            <small>MÓDULO NEXO 99</small>
            <h2>{menu}</h2>
            <p>
              Este módulo está preparado para su
              desarrollo e integración.
            </p>
            <div className="notice">
              Próximamente: funciones y datos reales.
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
