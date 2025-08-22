<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal">
        <div class="modal-header">
          <h2>Adicionar Carro</h2>
          <button class="close-button" @click="$emit('close')" aria-label="Fechar modal">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="modal-form">
          <div class="form-scrollable">
            <!-- Identificação do carro -->
            <div class="form-section">
              <h3>Identificação</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label for="brand">Marca *</label>
                  <input id="brand" v-model="car.brand" required placeholder="Ex: Volkswagen" />
                </div>
                <div class="form-group">
                  <label for="model">Modelo *</label>
                  <input id="model" v-model="car.model" required placeholder="Ex: Golf GTI" />
                </div>
                <div class="form-group">
                  <label for="yearManufacture">Ano de fabricação *</label>
                  <input id="yearManufacture" v-model="car.yearManufacture" type="number" min="1900" :max="new Date().getFullYear() + 1" required />
                </div>
                <div class="form-group">
                  <label for="yearModel">Ano do modelo</label>
                  <input id="yearModel" v-model="car.yearModel" type="number" min="1900" :max="new Date().getFullYear() + 1" />
                </div>
              </div>
            </div>

            <!-- Especificações técnicas -->
            <div class="form-section">
              <h3>Especificações</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label for="km">Quilometragem (KM) *</label>
                  <input id="km" v-model="car.km" type="number" min="0" required placeholder="Ex: 45000" />
                </div>
                <div class="form-group">
                  <label for="fuel">Combustível *</label>
                  <select id="fuel" v-model="car.fuel" required>
                    <option value="" disabled>Selecione</option>
                    <option value="Gasolina">Gasolina</option>
                    <option value="Álcool">Álcool</option>
                    <option value="Flex">Flex</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Elétrico">Elétrico</option>
                    <option value="Híbrido">Híbrido</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="transmission">Câmbio *</label>
                  <select id="transmission" v-model="car.transmission" required>
                    <option value="" disabled>Selecione</option>
                    <option value="Manual">Manual</option>
                    <option value="Automático">Automático</option>
                    <option value="CVT">CVT</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="color">Cor *</label>
                  <input id="color" v-model="car.color" required placeholder="Ex: Preto" />
                </div>
                <div class="form-group">
                  <label for="doors">Número de portas</label>
                  <select id="doors" v-model="car.doors">
                    <option value="" disabled>Selecione</option>
                    <option value="2">2 portas</option>
                    <option value="3">3 portas</option>
                    <option value="4">4 portas</option>
                    <option value="5">5 portas</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Informações comerciais -->
            <div class="form-section">
              <h3>Comercial</h3>
              <div class="form-grid">
                <div class="form-group">
                  <label for="price">Preço de venda *</label>
                  <div class="input-with-prefix">
                    <span class="prefix">R$</span>
                    <input id="price" v-model="car.price" type="number" min="0" step="0.01" required placeholder="0,00" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="status">Status *</label>
                  <select id="status" v-model="car.status" required>
                    <option value="" disabled>Selecione</option>
                    <option value="Disponível">Disponível</option>
                    <option value="Vendido">Vendido</option>
                    <option value="Em preparação">Em preparação</option>
                    <option value="Reservado">Reservado</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Dados opcionais -->
            <div class="form-section">
              <h3>Informações Adicionais</h3>
              <div class="form-group">
                <label for="accessories">Acessórios e opcionais</label>
                <input id="accessories" v-model="car.accessories" placeholder="Ex: ar-condicionado, multimídia, airbag, ABS..." />
              </div>
              <div class="form-group">
                <label for="docs">Situação da documentação</label>
                <input id="docs" v-model="car.docs" placeholder="Ex: IPVA pago, licenciado" />
              </div>
              <div class="form-group">
                <label for="notes">Observações gerais</label>
                <textarea id="notes" v-model="car.notes" rows="3" />
              </div>
              <div class="form-group">
                <label for="photos">Fotos do carro</label>
                <div class="file-upload">
                  <input id="photos" type="file" multiple @change="handleFiles" accept="image/*" />
                  <label for="photos" class="file-upload-label">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" fill="currentColor"/>
                    </svg>
                    Selecionar imagens
                  </label>
                  <span class="file-count" v-if="car.photos.length > 0">{{ car.photos.length }} arquivo(s) selecionado(s)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-actions">
            <button type="submit" class="btn-primary">Salvar</button>
            <button type="button" class="btn-secondary" @click="$emit('close')">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from 'vue'

export default defineComponent({
  name: 'AddCarModal',
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close', 'save'],
  setup(_, { emit }) {
    const car = ref({
      brand: '',
      model: '',
      yearManufacture: '',
      yearModel: '',
      vin: '',
      km: '',
      fuel: '',
      transmission: '',
      color: '',
      price: '',
      status: '',
      notes: '',
      accessories: '',
      photos: [] as File[],
      doors: '',
      docs: '',
    })

    function handleFiles(e: Event) {
      const files = (e.target as HTMLInputElement).files
      if (files) {
        car.value.photos = Array.from(files)
      }
    }

    function handleSubmit() {
      emit('save', { ...car.value })
      // Não fechar automaticamente, deixar o parent component decidir
    }

    // Resetar formulário quando o modal for aberto
    watch(() => _.visible, (newVal) => {
      if (newVal) {
        // Reset do formulário
        car.value = {
          brand: '',
          model: '',
          yearManufacture: '',
          yearModel: '',
          vin: '',
          km: '',
          fuel: '',
          transmission: '',
          color: '',
          price: '',
          status: '',
          notes: '',
          accessories: '',
          photos: [],
          doors: '',
          docs: '',
        }
      }
    })

    return { car, handleFiles, handleSubmit }
  },
})
</script>

<style scoped>
/* Animação de entrada/saída */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(2px);
}

.modal {
  background: #fff;
  border-radius: 12px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #eaeaea;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
}

.close-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.close-button:hover {
  background: #f1f5f9;
  color: #334155;
}

.modal-form {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 80vh; /* limita a altura do modal */
  overflow-y: auto;  /* habilita scroll vertical */
  padding-right: 0.5rem; /* espaço para scrollbar sem cortar conteúdo */
  box-sizing: border-box;
}


.form-scrollable {
  overflow-y: auto;
  padding: 0 1.5rem;
  flex: 1;
}

.form-section {
  margin: 1.5rem 0;
}

.form-section h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #334155;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eaeaea;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #374151;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.input-with-prefix {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-prefix .prefix {
  position: absolute;
  left: 0.75rem;
  color: #6b7280;
  font-weight: 500;
}

.input-with-prefix input {
  padding-left: 2.5rem;
  width: 100%;
}

.file-upload {
  display: flex;
  flex-direction: column;
}

.file-upload input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.file-upload-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  color: #64748b;
  font-size: 0.9rem;
}

.file-upload-label:hover {
  background-color: #f1f5f9;
  border-color: #94a3b8;
}

.file-count {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #64748b;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-top: 1px solid #eaeaea;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: white;
  color: #64748b;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background: #f9fafb;
  border-color: #9ca3af;
}

/* Responsividade */
@media (max-width: 1024px) {
  .modal {
    max-width: 90%;
  }
  
  .form-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .modal {
    max-width: 95%;
    max-height: 95vh;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-actions {
    flex-direction: column-reverse;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .modal-header {
    padding: 1rem 1rem 0.5rem;
  }
  
  .form-scrollable {
    padding: 0 1rem;
  }
  
  .modal-actions {
    padding: 1rem;
  }
  
  .modal-header h2 {
    font-size: 1.25rem;
  }
}
</style>